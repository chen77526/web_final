import React, { useState } from 'react'
import { Button } from '../globalStyles'
import { Link, useSearchParams } from 'react-router-dom'
import { UPDATE_CONFIRMATION } from "../graphql"
import { useMutation } from "@apollo/client";

const Confirm = () => {
    const [accConfirm] = useMutation(UPDATE_CONFIRMATION)
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id")
    console.log(id)
    const handleConfirm = () => {
        accConfirm({
            variables: {
                id: id
            }
        })
    }

    return(
        <>
            <Button onClick={handleConfirm} primary fontBig big>Verify</Button>
        </>
    )

}

export default Confirm