export const validatePhone = (phone: string) => {
  const phoneRegex = /^01[3-9]\d{8}$/;
  return phoneRegex.test(phone);
};

export const validatePassword = (password: string) => {
  return password.length >= 6;
};

// Format phone number - removes +88 if present
export const formatPhoneNumber = (value: string) => {
  // Remove all non-numeric characters except +
  let cleaned = value.replace(/[^\d+]/g, "");

  // If starts with +88, remove it
  if (cleaned.startsWith("+88")) {
    cleaned = cleaned.substring(3);
  } else if (cleaned.startsWith("88")) {
    cleaned = cleaned.substring(2);
  }

  // Ensure it starts with 0
  //   if (cleaned.length > 0 && !cleaned.startsWith("0")) {
  //     cleaned = "0" + cleaned;
  //   }

  // Limit to 11 digits
  return cleaned.substring(0, 11);
};
