import struct from '@react-native-firebase/common/lib/struct';

export const AddToCart = struct({
  item_id: 'string',
  item_name: 'string',
  item_category: 'string',
  quantity: 'number',
  price: 'number?',
  value: 'number?',
  currency: 'string?',
  origin: 'string?',
  item_location_id: 'string?',
  destination: 'string?',
  start_date: 'shortDate?',
  end_date: 'shortDate?',
});

export const AddToWishlist = struct({
  itemId: 'string',
  itemName: 'string',
  item_category: 'string',
  quantity: 'number',
  price: 'number?',
  value: 'number?',
  currency: 'string?',
  item_location_id: 'string?',
});

export const BeginCheckout = struct({
  value: 'number?',
  currency: 'string?',
  transaction_id: 'string?',
  number_of_nights: 'number?',
  number_of_rooms: 'number?',
  number_of_passengers: 'number?',
  origin: 'string?',
  destination: 'string?',
  start_date: 'shortDate?',
  end_date: 'shortDate?',
  travel_class: 'shortDate?',
});

export const CampaignDetails = struct({
  source: 'string',
  medium: 'string',
  campaign: 'string',
  term: 'string?',
  content: 'string?',
  aclid: 'string?',
  cp1: 'string?',
});

export const EarnVirtualCurrency = struct({
  virtual_currency_name: 'string',
  value: 'number',
});

export const EcommercePurchase = struct({
  currency: 'string?',
  value: 'number?',
  transaction_id: 'string?',
  tax: 'number?',
  shipping: 'number?',
  coupon: 'string?',
  location: 'string?',
  number_of_nights: 'number?',
  number_of_rooms: 'number?',
  number_of_passengers: 'number?',
  origin: 'string?',
  destination: 'string?',
  start_date: 'shortDate?',
  end_date: 'shortDate?',
  travel_class: 'string?',
});

export const GenerateLead = struct({
  currency: 'string?',
  value: 'number?',
});

export const JoinGroup = struct({
  group_id: 'string',
});

export const LevelUp = struct({
  level: 'number',
  character: 'string?',
});

export const Login = struct({
  method: 'string',
});

export const PostScore = struct({
  score: 'int',
  level: 'int?',
  character: 'string?',
});

export const PresentOffer = struct({
  item_id: 'string',
  item_name: 'string',
  item_category: 'string',
  quantity: 'int',
  price: 'int?',
  value: 'int?',
  currency: 'string?',
  item_location_id: 'string?',
});

export const PurchaseRefund = struct({
  currency: 'string?',
  value: 'number?',
  transaction_id: 'string?',
});

export const Search = struct({
  search_term: 'string',
  number_of_nights: 'number?',
  number_of_rooms: 'number?',
  number_of_passengers: 'number?',
  origin: 'string?',
  destination: 'string?',
  start_date: 'shortDate?',
  end_date: 'shortDate?',
  travel_class: 'string?',
});

export const SelectContent = struct({
  content_type: 'string',
  item_id: 'string',
});

export const Share = struct({
  content_type: 'string',
  item_id: 'string',
});

export const SignUp = struct({
  method: 'string',
});

export const SpendVirtualCurrency = struct({
  item_name: 'string',
  virtual_currency_name: 'string',
  value: 'number',
});

export const UnlockAchievement = struct({
  id: 'string',
});

export const ViewItem = struct({
  item_id: 'string',
  item_name: 'string',
  item_category: 'string',
  item_location_id: 'string?',
  price: 'number?',
  quantity: 'number?',
  currency: 'string?',
  value: 'number?',
  flight_number: 'string?',
  number_of_passengers: 'number?',
  number_of_nights: 'number?',
  number_of_rooms: 'number?',
  origin: 'string?',
  destination: 'string?',
  start_date: 'shortDate?',
  end_date: 'shortDate?',
  search_term: 'string?',
  travel_class: 'string?',
});

export const ViewItemList = struct({
  item_category: 'string',
});

export const ViewSearchResults = struct({
  search_term: 'string',
});