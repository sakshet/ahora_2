import { IReferenceData } from "../containers/common";
import { BASE_API_URL, fetchJson } from "../utils";

export async function getReferenceData(): Promise<IReferenceData> {
  const url: string = `${BASE_API_URL}/reference-data`;
  return await fetchJson(url);
}