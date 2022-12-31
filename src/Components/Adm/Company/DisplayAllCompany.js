import MaterialTable from "@material-table/core";
import { Avatar, Grid, Button, TextFied } from "@material-ui/core";
import { getData, postData, ServerURL } from "../../Services/FetchBackendData";
import { useState, useEffect } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function DisplayAllCompany(props) {

    const [company, setCompany] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    var [companyId, setCompanyId] = useState('');
    var [categoryId, setCategoryId] = useState('');
    var [subCategoryId, setSubCategoryId] = useState('');
    var [companyName, setCompanyName] = useState('');
    var [icon, setIcon] = useState({ filename: '/assets/defaultcar.png', bytes: '' });
    var [open, setOpen] = useState(false);
    const fetchAllComapany = async () => {
        var result = await getData('company/display_company');
        setCompany(result.data);
    }

    useEffect(function () {
        fetchAllComapany()
    }, [])

    const fetchAllCategory = async () => {
        var result = await getData('category/dipslay_category')
        setCategory(result.data)
    }

    const fetchAllSubCategory = async () => {
        var result = await getData('subcategory/display_subcategory')
    }

    const handleSetDataForDialog = (rowData) => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    function dipslayCompany() {
        return (
            <MaterialTable
                title="Company Data"
                columns={[
                    { title: 'Company ID', field: 'companyid' },
                    { title: 'Category Name', field: 'categoryname' },
                    { title: 'Sub Category Name', field: 'subcategoryname' },
                    { title: 'Company Name', field: 'companyname' },
                    { title: 'Icon', field: 'icon', render: (rowData) => <Avatar src={`${ServerURL}/images/${rowData.icon}`} style={{ width: 80, height: 56 }} variant="rounded" /> }
                ]}
                data={company}
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Edit Data',
                        onClick: (event, rowData) => handleSetDataForDialog(rowData)
                    }
                ]}
            />
        )
    }

    const showDialog = () => {
        return (
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Use Google's location service?"}
                    </DialogTitle>
                    <DialogContent>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} autoFocus>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>

            </div>
        )
    }


    return (
        <div>
            {dipslayCompany()}
            <div>
                {showDialog()}
            </div>
        </div>
    )
}