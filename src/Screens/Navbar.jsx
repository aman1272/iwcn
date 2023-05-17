import { CNavbar, CNavbarBrand, CButton, CForm, CNavbarNav, CFormInput, CNavLink } from '@coreui/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'

const Navbar = (props) => {

    const [value, setValue] = useState('')

    const handleClick = () => {
        if (value == "") alert("Empty field will not accepted then please enter numbers")

        props.getData(value)
        setValue("")
    }
    return (
        <div>
            <CNavbar expandable="sm" color="info" >
                <CNavbarBrand>
                    IWCN
                </CNavbarBrand>
                <CNavbarNav>
                    <CNavLink>Home</CNavLink>
                </CNavbarNav>
                <CNavbarNav >
                    <CForm inline className="d-flex" >
                        <CFormInput
                            className="mr-sm-2"
                            placeholder="Enter here"
                            size="sm"
                            type="number"
                            value={value}
                            onChange={(e) => { setValue(e.target.value) }}
                        />
                        <CButton color="dark" className="my-2 my-sm-0" onClick={handleClick} >Submit</CButton>
                    </CForm>
                </CNavbarNav>
            </CNavbar>
        </div>
    )
}
export default Navbar