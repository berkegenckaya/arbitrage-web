import axios from "axios";

export async function sendMessage(assistantId: string, message: string): Promise<string> {
  try {
    const response = await axios.get("http://localhost:3000/start-thread", {
      params: { assistantId, message },
      headers: { "Accept": "*/*" },
    });

    console.log("Tam API Yanıtı:", response.data); // Yanıtı kontrol et

    return response.data;
  } catch (error: any) {
    console.error("API isteği başarısız oldu:", error.response?.status, error.response?.data);
    
    // Hata mesajını kullanıcıya göstermek için özel bir hata mesajı döndür
    throw new Error(error.response?.data || "API isteği başarısız oldu");
  }
}
