import pytest
from typing import List

# ----------------------------------------------------------------------
# Code to Test (can be imported)
# ----------------------------------------------------------------------

class ShoppingCart:
    def __init__(self):
        self.items: List[str] = []

    def add_item(self, item: str):
        if not item:
            raise ValueError("Item cannot be empty")
        self.items.append(item)

    def size(self) -> int:
        return len(self.items)

    def clear(self):
        self.items = []

# ----------------------------------------------------------------------
# Tests
# ----------------------------------------------------------------------

@pytest.fixture
def empty_cart():
    """Fixture to provide a fresh ShoppingCart instance"""
    return ShoppingCart()

@pytest.fixture
def filled_cart():
    """Fixture with pre-filled items"""
    cart = ShoppingCart()
    cart.add_item("Apple")
    cart.add_item("Banana")
    return cart

def test_initial_size(empty_cart):
    assert empty_cart.size() == 0

def test_add_item(empty_cart):
    empty_cart.add_item("Milk")
    assert empty_cart.size() == 1
    assert "Milk" in empty_cart.items

def test_clear_cart(filled_cart):
    assert filled_cart.size() == 2
    filled_cart.clear()
    assert filled_cart.size() == 0

def test_add_empty_item_raises_error(empty_cart):
    with pytest.raises(ValueError, match="Item cannot be empty"):
        empty_cart.add_item("")

@pytest.mark.parametrize("item, expected_size", [
    ("Orange", 1),
    ("Grape", 1),
])
def test_add_item_param(empty_cart, item, expected_size):
    empty_cart.add_item(item)
    assert empty_cart.size() == expected_size
