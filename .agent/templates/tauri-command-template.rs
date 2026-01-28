// Tauri Command Template
// Rust handlers for frontend invocation

use tauri::command;
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct CustomResponse {
    message: String,
    timestamp: u64,
}

/// A simple command that takes a name and returns a greeting.
/// Used in frontend: invoke('greet', { name: 'User' })
#[command]
pub fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

/// An async command simulating heavy computation.
/// Errors are returned as Strings for simplification.
#[command]
pub async fn perform_heavy_task(input: i32) -> Result<CustomResponse, String> {
    println!("Starting heavy task with input: {}", input);

    if input < 0 {
        return Err("Input must be positive".into());
    }

    // Simulate delay
    // std::thread::sleep is blocking, in async use tokio::time::sleep if available
    // or std::thread::sleep inside spawn_blocking
    
    let result = CustomResponse {
        message: format!("Processed {}", input * 2),
        timestamp: 1234567890, // Placeholder
    };

    Ok(result)
}

// Usage in main.rs builder:
// .invoke_handler(tauri::generate_handler![greet, perform_heavy_task])
