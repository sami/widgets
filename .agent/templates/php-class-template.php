<?php

declare(strict_types=1);

namespace App\Services;

use InvalidArgumentException;
use Psr\Log\LoggerInterface;

/**
 * Interface ProcessorInterface
 */
interface ProcessorInterface
{
    public function process(array $data): bool;
}

/**
 * Class DataProcessor
 * 
 * A template class demonstrating modern PHP 8.x features.
 * 
 * @package App\Services
 */
class DataProcessor implements ProcessorInterface
{
    /**
     * @var LoggerInterface
     */
    private LoggerInterface $logger;

    /**
     * @var array
     */
    private array $config;

    /**
     * DataProcessor Constructor
     * 
     * @param LoggerInterface $logger
     * @param array $config
     */
    public function __construct(LoggerInterface $logger, array $config = [])
    {
        $this->logger = $logger;
        $this->config = $config;
    }

    /**
     * Process the given data.
     * 
     * @param array $data
     * @return bool
     * @throws InvalidArgumentException
     */
    public function process(array $data): bool
    {
        $this->logger->info('Starting processing', ['count' => count($data)]);

        if (empty($data)) {
            throw new InvalidArgumentException('Data array cannot be empty');
        }

        foreach ($data as $key => $value) {
            $this->handleItem((string) $key, $value);
        }

        $this->logger->info('Processing complete');

        return true;
    }

    /**
     * Handle a single item (Internal method).
     * 
     * @param string $key
     * @param mixed $value
     * @return void
     */
    private function handleItem(string $key, mixed $value): void
    {
        // Logic here
        // $processed = ...
    }

    /**
     * Get current configuration (Immutable getter).
     * 
     * @return array
     */
    public function getConfig(): array
    {
        return $this->config;
    }
}
