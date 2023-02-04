import { invoke } from "@tauri-apps/api";

export const getWebsites = async () : Promise<String[]> => {
  return await invoke("get_blocked");
}

export const addWebsite = async (website : string) : Promise<String> => {
  return await invoke("add_to_blocklist", { website });
}

export const removeWebsite = async (website : string) : Promise<String> => {
  return await invoke("remove_from_blocklist", { website });
}

export const startBlocking = async () : Promise<String> => {
  return await invoke("start_blocking");
}

export const stopBlocking = async () : Promise<String> => {
  return await invoke("stop_blocking");
}

export const timeBlock = async (seconds : number) : Promise<String> => {
  return await invoke("block_for_time", { seconds });
}
