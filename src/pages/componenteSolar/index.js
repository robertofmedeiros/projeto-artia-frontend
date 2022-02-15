import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Copyright from '../../components/copyright';
import MenuDashborad from '../../components/menu';
import { useStyles } from '../../components/constantes';
import Api from '../../services/utils/RestClient';
import Link from '@material-ui/core/Link';
import ModalCadastro from '../../components/componenteManutencao';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function ComponenteSolar() {
    const classes = useStyles();
    const [rows, setRows] = useState([]);
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        async function getItems() {
            const { data } = await Api.get("/intelbras/solar/componente");

            setRows(data);
        }

        getItems();
    }, []);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    async function salvarComponente(data) {
        var response = await Api.post("/intelbras/solar/componente", data);
        if (response.status === 201) {
            const { data } = await Api.get("/intelbras/solar/componente");

            setRows(data);
        }
    }

    return (
        <div className={classes.root}>
            <ModalCadastro title="Cadastro Componente"
                open={open}
                handleClose={handleClose}
                salvarComponente={salvarComponente} />
            <CssBaseline />
            <MenuDashborad title="Componente">
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3}>
                            {/* Chart */}
                            <Grid item xs={12} lg={9}>
                                <Paper>
                                    <Table size="small">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Id</TableCell>
                                                <TableCell>Nome</TableCell>
                                                <TableCell>Altura</TableCell>
                                                <TableCell>Largura</TableCell>
                                                <TableCell>Profundidade</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.id}>
                                                    <TableCell>{row.id}</TableCell>
                                                    <TableCell>{row.nome}</TableCell>
                                                    <TableCell>{row.altura}</TableCell>
                                                    <TableCell>{row.largura}</TableCell>
                                                    <TableCell>{row.profundidade}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                    <div className={classes.seeMore}>
                                        <Link color="primary" href="#" onClick={handleOpen}>
                                            <AddCircleIcon />
                                        </Link>
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Box pt={4}>
                            <Copyright />
                        </Box>
                    </Container>
                </main>
            </MenuDashborad>
        </div>
    );
}