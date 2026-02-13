import config from "@/config";

export async function refreshAccessToken(token: any) {
  try {
    const response = await fetch(`${config.api_url}/auth/refresh-token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken: token.refreshToken }),
    });

    const refreshedTokens = await response.json();

    if (!response.ok) throw refreshedTokens;

    return {
      ...token,
      accessToken: refreshedTokens.data.accessToken,
      accessTokenExpires: Date.now() + 15 * 60 * 1000, // নতুন টাইম সেট করা
      // যদি ব্যাকেন্ড নতুন রিফ্রেশ টোকেন দেয়, সেটা আপডেট করুন, নাহলে আগেরটাই রাখুন
      refreshToken: refreshedTokens.data.refreshToken ?? token.refreshToken,
    };
  } catch (error) {
    console.error("RefreshAccessTokenError", error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}
