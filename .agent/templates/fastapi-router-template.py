from fastapi import APIRouter, HTTPException, Depends, status, Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from uuid import UUID, uuid4

# ----------------------------------------------------------------------
# 1. Pydantic Models (Schemas)
# ----------------------------------------------------------------------

class UserBase(BaseModel):
    username: str = Field(..., min_length=3, max_length=50)
    email: EmailStr

class UserCreate(UserBase):
    password: str = Field(..., min_length=8)

class UserResponse(UserBase):
    id: UUID
    is_active: bool

    class Config:
        orm_mode = True

# ----------------------------------------------------------------------
# 2. Dependencies
# ----------------------------------------------------------------------

def get_db():
    # Simulate DB session yield
    try:
        db = "Session"
        yield db
    finally:
        pass

# ----------------------------------------------------------------------
# 3. Router Definition
# ----------------------------------------------------------------------

router = APIRouter(
    prefix="/users",
    tags=["users"],
    responses={404: {"description": "Not found"}},
)

# Mock Data
users_db = []

@router.get("/", response_model=List[UserResponse])
async def read_users(skip: int = 0, limit: int = 10, db=Depends(get_db)):
    """
    Retrieve users with pagination.
    """
    return users_db[skip : skip + limit]

@router.get("/{user_id}", response_model=UserResponse)
async def read_user(
    user_id: UUID = Path(..., title="The ID of the user"),
    db=Depends(get_db)
):
    """
    Get a specific user by ID.
    """
    user = next((u for u in users_db if u.id == user_id), None)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.post("/", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
async def create_user(user: UserCreate, db=Depends(get_db)):
    """
    Create a new user.
    """
    if any(u.email == user.email for u in users_db):
        raise HTTPException(status_code=400, detail="Email already registered")
    
    new_user = UserResponse(
        id=uuid4(),
        username=user.username,
        email=user.email,
        is_active=True
    )
    users_db.append(new_user)
    return new_user

@router.delete("/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_user(user_id: UUID, db=Depends(get_db)):
    """
    Delete a user.
    """
    global users_db
    users_db = [u for u in users_db if u.id != user_id]
    return None
