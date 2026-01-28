<?php

use PHPUnit\Framework\TestCase;

/**
 * Class StackTest
 * 
 * Example test suite for a Stack data structure
 */
class StackTest extends TestCase
{
    protected array $stack;

    /**
     * Set up functionality before each test
     */
    protected function setUp(): void
    {
        $this->stack = [];
    }

    /**
     * Test simple push and pop
     */
    public function testPushAndPop()
    {
        array_push($this->stack, 'foo');

        $this->assertEquals('foo', $this->stack[count($this->stack) - 1]);
        $this->assertCount(1, $this->stack);

        $this->assertEquals('foo', array_pop($this->stack));
        $this->assertEmpty($this->stack);
    }

    /**
     * Test data provider (Data Driven Tests)
     * @dataProvider additionProvider
     */
    public function testAdd($a, $b, $expected)
    {
        $this->assertEquals($expected, $a + $b);
    }

    public function additionProvider()
    {
        return [
            [0, 0, 0],
            [0, 1, 1],
            [1, 1, 2],
            [1, -1, 0]
        ];
    }

    public function testOutput()
    {
        $this->expectOutputString('foo');
        print 'foo';
    }
}
