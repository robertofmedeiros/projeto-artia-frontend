import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Data from '../../components/data';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { createDataAtividade } from '../../services/utils/Util';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AtividadeModal(props) {
    const classes = useStyles();

    const [dataInicial, setDataInicial] = React.useState('');
    const [dataFinal, setDataFinal] = React.useState('');
    const [nome, setNome] = React.useState('');
    const [projeto, setProjeto] = React.useState('');

    function atualizarDataInicial(event) {
        setDataInicial(event.target.value);
    }

    function atualizarDataFinal(event) {
        setDataFinal(event.target.value);
    }

    function atualizarNome(event) {
        setNome(event.target.value);
    }

    function atualizarProjeto(event) {
        setProjeto(event.target.value);
    }

    function retornarAtividade() {
        var atividade = createDataAtividade(nome, dataInicial, dataFinal, projeto);
        console.log("Atividade: " + JSON.stringify(atividade));
        props.salvarAtividade(atividade);
        props.handleClose();
    }

    return (
        <div className={classes.root}>
            <Dialog fullScreen open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title" TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={props.handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {props.title}
                        </Typography>
                        <Button autoFocus color="inherit" onClick={retornarAtividade}>
                            Salvar
                        </Button>
                    </Toolbar>
                </AppBar>
                <DialogContent>
                    <form className={classes.form} noValidate fullWidth>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="nome"
                                    label="Nome Projeto"
                                    name="nome"
                                    type=""
                                    onChange={atualizarNome}
                                />
                            </Grid>
                            <Grid item xs={12} lg={9}>
                                <Data
                                    id="dataInicio"
                                    label="Data Inicio"
                                    type="date"
                                    className={classes.textField}
                                    atualizarValor={atualizarDataInicial}
                                />
                            </Grid>
                            <Grid item xs={12} lg={9}>
                                <Data
                                    id="dataFinal"
                                    label="Data Final"
                                    type="date"
                                    className={classes.textField}
                                    atualizarValor={atualizarDataFinal}
                                />
                            </Grid>
                            <Grid item xs={12} lg={9}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="projeto"
                                    label="Id Projeto"
                                    type="number"
                                    name="projeto"
                                    onChange={atualizarProjeto}
                                />
                            </Grid>

                            <Grid item xs={12} />
                        </Grid>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}