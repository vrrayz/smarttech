import React from 'react'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import styled from 'styled-components';

export const Forms = () => {
  return (
    <div>Forms</div>
  )
}
export const SearchInput = () =>{
    return (
        <SearchFormGroup>
            <InputText type="text" placeholder='Search' />
            <ManageSearchIcon fontSize='medium' />
        </SearchFormGroup>
    )
}

const InputText = styled.input`
border: 1px solid;
border-radius: 8px;
width: 100%;
&:focus{
    outline: none;
}
`
const SearchFormGroup = styled.div`
display: grid;
border: 1px solid #999;
border-radius: 8px;
grid-template-columns: 1fr 35px;
${InputText}{
    border: none !important;
    font-weight: 200;
    padding: 4px 0px 4px 12px;
}
svg{
    color: #666;
    margin: auto
}
`