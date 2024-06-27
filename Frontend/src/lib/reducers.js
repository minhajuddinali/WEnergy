// reducers.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  agentData: null,
};

const agentSlice = createSlice({
  name: 'agent',
  initialState,
  reducers: {
    setAgentData: (state, action) => {
      state.agentData = action.payload;
    },
  },
});

export const { setAgentData } = agentSlice.actions;
export default agentSlice.reducer;