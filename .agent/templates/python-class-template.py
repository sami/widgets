from typing import List, Optional, Dict, Any
import logging

# Configure logger
logger = logging.getLogger(__name__)

class DataProcessor:
    """
    A template class demonstrating standard Python patterns.

    This class simulates processing data items with validation,
    logging, and state management.

    Attributes:
        name (str): The name of the processor instance.
        config (Dict[str, Any]): Configuration dictionary.
    """

    def __init__(self, name: str, config: Optional[Dict[str, Any]] = None) -> None:
        """
        Initializes the DataProcessor.

        Args:
            name (str): Unique identifier for the processor.
            config (Optional[Dict[str, Any]]): Configuration options.
                Defaults to an empty dictionary if None.
        """
        self._name = name
        self._config = config or {}
        self._items: List[Any] = []
        self._is_active = False

        logger.info(f"Initialized DataProcessor: {self._name}")

    @property
    def name(self) -> str:
        """str: content name, read-only."""
        return self._name

    @property
    def item_count(self) -> int:
        """int: Number of items currently queued."""
        return len(self._items)

    def add_item(self, item: Any) -> None:
        """
        Adds an item to the processing queue.

        Args:
            item (Any): The item to add.

        Raises:
            ValueError: If the item is invalid (e.g., None).
        """
        if item is None:
            raise ValueError("Item cannot be None")
        
        self._items.append(item)
        logger.debug(f"Added item: {item}")

    def process_all(self) -> List[Any]:
        """
        Processes all items in the queue.

        Returns:
            List[Any]: A list of results from processing.
        """
        results = []
        self._is_active = True
        
        try:
            for item in self._items:
                results.append(self._process_single(item))
            self._items.clear()
        except Exception as e:
            logger.error(f"Error during processing: {e}")
            raise
        finally:
            self._is_active = False
            
        return results

    def _process_single(self, item: Any) -> str:
        """
        Internal method to process a single item.

        Args:
            item (Any): The item to process.

        Returns:
            str: Processed string representation.
        """
        # Logic goes here
        return f"Processed: {item}"

    def __str__(self) -> str:
        return f"DataProcessor(name='{self.name}', items={self.item_count})"

    def __repr__(self) -> str:
        return f"<{self.__class__.__name__} name={self.name} config={self._config}>"

    # Context Manager Support
    def __enter__(self):
        logger.info("Entering context")
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        logger.info("Exiting context")
        # Cleanup code here
        self._items.clear()
        if exc_type:
            logger.error(f"Exception occurred: {exc_val}")
        return False  # Propagate exception
