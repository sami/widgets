import asyncio
import random
import time
from typing import List, Dict

async def fetch_data(source_id: int) -> Dict[str, Any]:
    """
    Simulates fetching data from an external source asynchronously.
    """
    delay = random.uniform(0.5, 2.0)
    print(f"Starting fetch for source {source_id} (delay: {delay:.2f}s)")
    
    # Non-blocking sleep
    await asyncio.sleep(delay)
    
    # Simulate random failure
    if random.random() < 0.1:
        raise ConnectionError(f"Connection failed for source {source_id}")
    
    print(f"Finished fetch for source {source_id}")
    return {"id": source_id, "data": f"Payload {source_id}", "time": delay}

async def process_batch(ids: List[int]):
    """
    Demonstrates processing a batch of tasks concurrently using asyncio.gather.
    """
    print(f"\n--- Batch Processing {len(ids)} items ---")
    start_time = time.perf_counter()

    tasks = [fetch_data(i) for i in ids]
    
    # return_exceptions=True allows all tasks to complete even if some fail
    results = await asyncio.gather(*tasks, return_exceptions=True)

    for i, result in enumerate(results):
        if isinstance(result, Exception):
            print(f"Task {ids[i]} failed with: {result}")
        else:
            print(f"Task {ids[i]} success: {result}")

    duration = time.perf_counter() - start_time
    print(f"Total batch duration: {duration:.2f}s")

async def process_as_completed(ids: List[int]):
    """
    Demonstrates handling results as soon as they complete.
    """
    print(f"\n--- Processing As Completed ---")
    tasks = [fetch_data(i) for i in ids]

    for completed_task in asyncio.as_completed(tasks):
        try:
            result = await completed_task
            print(f">> Streamed Result: {result['id']}")
        except Exception as e:
            print(f">> Streamed Error: {e}")

async def main():
    """
    Main entry point.
    """
    ids = [1, 2, 3, 4, 5]

    # Example 1: Wait for all
    await process_batch(ids)

    # Example 2: Stream results
    await process_as_completed(ids)
    
    # Example 3: Timeout handling
    try:
        print("\n--- Timeout Example ---")
        await asyncio.wait_for(fetch_data(99), timeout=0.1)
    except asyncio.TimeoutError:
        print("Operation timed out!")

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("Program interrupted")
