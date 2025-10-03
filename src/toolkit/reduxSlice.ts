import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface NavbarState {
    navbar: boolean
}
const initialState: NavbarState = {
    navbar: false
}

export const NavbarSlice = createSlice({
    name: "NAVBAR",
    initialState,
    reducers: {
        handleNavbar: (state, action: PayloadAction<boolean>) => {
            state.navbar = action.payload
        }
    }
})
export const {handleNavbar} = NavbarSlice.actions
export default NavbarSlice.reducer