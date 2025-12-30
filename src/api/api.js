// ===============================
// ⭐ BACKEND BASE URL (IMPORTANT)
// ===============================
const BASE_URL = "http://localhost:8000";

// ===============================
// ⭐ COMMON BACKEND CALL FUNCTION
// ===============================
export async function callBackend(data) {
  try {
    const response = await fetch(`${BASE_URL}/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Backend error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Backend call failed:", error);
    throw error;
  }
}
