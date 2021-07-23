import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Copyright from '../../components/copyright';
import MenuDashborad from '../../components/menu';
import { useStyles } from '../../components/constantes';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import Api from '../../services/utils/RestClient';
import { dataFormat } from '../../services/utils/Util';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ModalCadastro from '../../components/atividadeManutencao';

export default function Atividade() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [rows, setRows] = useState([]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    async function salvarAtividade(data){
        console.log(data);
        var response = await Api.post("/atividades", data);
        if(response.status === 200){
            const { data } = await Api.get("/atividades");

            setRows(data);
        }
    }

    useEffect(() => {
        async function getItems() {
            const { data } = await Api.get("/atividades");

            setRows(data);
        }

        getItems();
    }, []);

    return (
        <div className={classes.root}>
            <ModalCadastro title="Cadastro Atividade"
                open={open}
                handleClose={handleClose}
                salvarAtividade={salvarAtividade} />
            <CssBaseline />
            <MenuDashborad title="Atividades">
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
                                                <TableCell>Data Inicio</TableCell>
                                                <TableCell>Data Final</TableCell>
                                                <TableCell>Projeto</TableCell>
                                                <TableCell>Concluída</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.id}>
                                                    <TableCell>{row.id}</TableCell>
                                                    <TableCell>{row.nome}</TableCell>
                                                    <TableCell>{dataFormat(row.dataInicio)}</TableCell>
                                                    <TableCell>{dataFormat(row.dataFinal)}</TableCell>
                                                    <TableCell>{row.idProjeto}</TableCell>
                                                    <TableCell>{row.finalizada ? "Sim" : "Não"}</TableCell>
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