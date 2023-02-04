// Gets permission from user to open the hosts file permenantly

use std::process::Command;

pub struct HostRequest;

impl HostRequest {
    pub fn _is_permitted() -> bool {
        let output = Command::new("sudo")
            .arg("ls")
            .output()
            .expect("failed to execute process");

        if output.status.success() {
            true
        } else {
            false
        }
    }

    pub fn get_hosts() -> String {
        // reads the host file without sudo
        let output = Command::new("cat")
            .arg("/etc/hosts")
            .output()
            .expect("failed to execute process");

        String::from_utf8_lossy(&output.stdout).to_string()
    }

    // writes hosts to /etc/hosts via osascript
    pub fn write_hosts(hosts: String) {
        // writes hosts to /etc/hosts via osascript
        Command::new("osascript")
            .arg("-e")
            .arg(format!("do shell script \"echo \\\"{}\\\" > /etc/hosts\" with administrator privileges", hosts))
            .spawn()
            .expect("Failed to execute osascript command");
        // Command::new("sudo")
        //     .arg("sh")
        //     .arg("-c")
        //     .arg(format!("echo \"{}\" > /etc/hosts", hosts))
        //     .output()
        //     .expect("failed to execute process");
    }
}
