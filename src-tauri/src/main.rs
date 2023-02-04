#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod blocker;
mod blocklist;
mod host_request;
mod sion;

fn main() {
    // gets args
    let args: Vec<String> = std::env::args().collect();
    // if args has -w
    if args.len() > 1 && args[1] == "-w" {
        let seconds = args[2].parse::<u64>().unwrap();
        child_wait(seconds);
    } else {
        tauri::Builder::default()
            .invoke_handler(tauri::generate_handler![
                get_blocked,
                add_to_blocklist,
                remove_from_blocklist,
                clear_blocklist,
                start_blocking,
                stop_blocking,
                block_for_time
            ])
            .run(tauri::generate_context!())
            .expect("error while running tauri application");
    }
}

#[tauri::command]
fn get_blocked() -> Vec<String> {
    sion::sion(vec![String::from("-p")])
        .unwrap()
        .split(" ")
        .map(|s| s.to_string())
        .collect::<Vec<String>>()
}

#[tauri::command]
fn add_to_blocklist(website: String) -> Option<String> {
    sion::sion(vec![String::from("-a"), website])
}

#[tauri::command]
fn remove_from_blocklist(website: String) -> Option<String> {
    sion::sion(vec![String::from("-r"), website])
}

#[tauri::command]
fn clear_blocklist() -> Option<String> {
    sion::sion(vec![String::from("-c")])
}

#[tauri::command]
fn start_blocking() -> Option<String> {
    sion::sion(vec![String::from("-b")])
}

#[tauri::command]
fn stop_blocking() -> Option<String> {
    sion::sion(vec![String::from("-f")])
}

#[tauri::command]
fn block_for_time(seconds: u64) -> Option<String> {
    sion::sion(vec![String::from("-s"), seconds.to_string()])
}

#[tauri::command]
fn child_wait(seconds: u64) -> Option<String> {
    sion::sion(vec![String::from("-w"), seconds.to_string()])
}