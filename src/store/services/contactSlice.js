import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios-contact';

const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
    name: '',
    photo: '',
    phone: '',
    email: '',
    open: false,
    contact: null
}

export const getContacts = createAsyncThunk(
    'contacts/get',
    async () => {
        const res = await axios.get('contacts.json');
        return res.data;
    }
)

export const createContact = createAsyncThunk(
    'contacts/create',
    async (contact) => {
        const res = await axios.post('contacts.json', contact);
        return res.data;
    }
)

export const editContact = createAsyncThunk(
    'contacts/edit',
    async (payload) => {
        const res = await axios.put(`contacts/${payload.id}.json`, payload.contact);
        return res.data;
    }
)

export const getContactById = createAsyncThunk(
    'contacts/create/id',
    async (id) => {
        const res = await axios.get(`contacts/${id}.json`);
        return res.data;
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/delete',
    async (id) => {
        await axios.delete(`contacts/${id}.json`);
        return id;
    }
)

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        inputHandler: (state, action) => {
            state[action.payload.name] = action.payload.value
        },
        clearInputs: (state) => {
            state.name = '';
            state.email = '';
            state.phone = '';
            state.photo = '';
        },
        handleClose: (state) => {
            state.open = false;
        },
        clickCardContact: (state, action) => {
            const filter = state.contacts.filter(el => el.id === action.payload);
            state.contact = filter;
            state.open = true;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getContacts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getContacts.rejected, (state, action) => {
                state.error = action.error;
                state.isLoading = false;
            })
            .addCase(getContacts.fulfilled, (state, action) => {
                if (action.payload !== null) {
                    state.contacts = Object.keys(action.payload).map(id => {
                        return { ...action.payload[id], id: id }
                    })
                }

                state.isLoading = false;
            })
            .addCase(createContact.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createContact.rejected, (state, action) => {
                state.error = action.error;
                state.isLoading = false;
            })
            .addCase(createContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.email = '';
                state.name = '';
                state.phone = '';
                state.photo = '';
            })
            .addCase(editContact.pending, state => {
                state.isLoading = true
            })
            .addCase(editContact.rejected, (state, action) => {
                state.error = action.error;
                state.isLoading = false;
            })
            .addCase(editContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.email = '';
                state.name = '';
                state.phone = '';
                state.photo = '';
            })
            .addCase(getContactById.pending, state => {
                state.isLoading = true
            })
            .addCase(getContactById.rejected, (state, action) => {
                state.error = action.error;
                state.isLoading = false;
            })
            .addCase(getContactById.fulfilled, (state, action) => {
                state.email = action.payload.email;
                state.name = action.payload.name;
                state.phone = action.payload.phone;
                state.photo = action.payload.photo;
                state.isLoading = false;
            })
            .addCase(deleteContact.pending, state => {
                state.isLoading = true;
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.error = action.error;
                state.isLoading = false;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                const index = state.contacts.findIndex(contact => contact.id === action.payload);
                state.contacts.splice(index, 1);
                state.isLoading = false;
            })
    }
})

export const { inputHandler, clearInputs, handleClose, clickCardContact } = contactsSlice.actions;
export default contactsSlice.reducer;