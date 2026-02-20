import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

// Types matching your API data structure

export type TCourseDetails = {
  _id: string;
  name: string;
  subtitle: string;
  regular_fees: number;
  discount_fees: number;

  defaultDiscount: number;
};

type TCartState = {
  courseDetails: TCourseDetails | null;

  payNow: number;
  courseId: string | null;
  couponDiscount: number;
};

// Initial state
const initialState: TCartState = {
  courseDetails: null,

  payNow: 0,
  courseId: null,
  couponDiscount: 0,
};

// Cart slice
const courseCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action: PayloadAction<Partial<TCartState>>) => {
      return { ...state, ...action.payload };
    },
    applyCoupon: (state, action: PayloadAction<number>) => {
      state.couponDiscount = action.payload;
    },
    resetCart: () => initialState,

    setPayNow: (state, action: PayloadAction<number>) => {
      state.payNow = action.payload;
    },
  },
});

// Export actions
export const {
  updateCart,
  applyCoupon,
  resetCart,

  setPayNow,
} = courseCartSlice.actions;

// Enhanced selector with calculation logic
export const selectCartData = (state: RootState) => {
  const {
    courseDetails,

    payNow,
    courseId,
    couponDiscount,
  } = state.courseCart;

  // Initialize calculation values
  let baseFee = 0;
  let discountAmount = 0;
  let discountedPrice = 0;
  let netPayable = 0;
  const totalPaid = payNow;

  let discountValue = "0"; // total discount as string

  if (courseDetails) {
    // Find the selected course variation

    // Calculate discount from regular to discount price
    if (discountedPrice > 0) {
      discountAmount = discountedPrice - baseFee;
    } else {
      discountAmount = 0;
    }

    // Apply additional coupon discount
    netPayable = baseFee - couponDiscount;

    // Ensure netPayable doesn't go below zero
    netPayable = Math.max(0, netPayable);

    // Calculate total discount value as string
    const totalDiscountAmount = baseFee - netPayable;
    discountValue = totalDiscountAmount.toString();
  }

  // Return data in the format your backend expects
  return {
    // Original cart state
    courseDetails,

    payNow,
    courseId,
    couponDiscount,

    // Calculated values for UI
    baseFee,
    discountAmount,
    discountedPrice,

    // Backend-compatible format
    netPayable,
    totalPaid,

    discountValue,
    amount: netPayable?.toString(),
    totalAmount: baseFee?.toString(),

    // Available branches for selected course type
  };
};

export default courseCartSlice.reducer;
