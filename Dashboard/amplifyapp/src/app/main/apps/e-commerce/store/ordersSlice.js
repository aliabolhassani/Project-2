import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import axios from 'axios';
import mock from '../../../../../@fake-db/mock';

axios.defaults.adapter = mock.originalAdapter;

export const getOrders = createAsyncThunk(
  'eCommerceApp/orders/getOrders',
  async () => {
    // const response = await axios.get('/api/e-commerce-app/orders');
    // const data = await response.data;

    const { data } = await axios.post('/getOrders', {});

    // console.log(data);
    // return data.sort((a, b) => a.timestamp < b.timestamp);
    return data;
  }
);

export const removeOrders = createAsyncThunk(
  'eCommerceApp/orders/removeOrders',
  async (orderIds, { dispatch, getState }) => {
    await axios.post('/api/e-commerce-app/remove-orders', { orderIds });

    return orderIds;
  }
);

const ordersAdapter = createEntityAdapter({});

export const { selectAll: selectOrders, selectById: selectOrderById } =
  ordersAdapter.getSelectors((state) => state.eCommerceApp.orders);

const ordersSlice = createSlice({
  name: 'eCommerceApp/orders',
  initialState: ordersAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setOrdersSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [getOrders.fulfilled]: ordersAdapter.setAll,
    [removeOrders.fulfilled]: (state, action) =>
      ordersAdapter.removeMany(state, action.payload),
  },
});

export const { setOrdersSearchText } = ordersSlice.actions;

export default ordersSlice.reducer;
