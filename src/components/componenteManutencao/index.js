import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { createDataComponente } from '../../services/utils/Util';

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

export default function ComponeteModal(props) {
    const classes = useStyles();

    const [largura, setLargura] = React.useState('');
    const [profundidade, setProfundidade] = React.useState('');
    const [altura, setAltura] = React.useState('');
    const [nome, setNome] = React.useState('');
    const [idSegmento, setIdSegmento] = React.useState('');
    const [idGrupoComponente, setGrupoComponente] = React.useState('');
    const [pesoBruto, setPesoBruto] = React.useState('');
    const [pesoLiquido, setPedoLiquido] = React.useState('');


    function atualizarAltura(event) {
        setAltura(event.target.value);
    }

    function atualizarLargura(event) {
        setLargura(event.target.value);
    }

    function atualizarProfundidade(event) {
        setProfundidade(event.target.value);
    }

    function atualizarNome(event) {
        setNome(event.target.value);
    }

    function atualizarSegmento(event) {
        setIdSegmento(event.target.value);
    }

    function atualizarGrupo(event) {
        setGrupoComponente(event.target.value);
    }

    function atualizarPesoBruto(event) {
        setPesoBruto(event.target.value);
    }

    function atualizarPesoLiquido(event) {
        setPedoLiquido(event.target.value);
    }

    function retornarComponente() {
        var componente = createDataComponente(nome, largura, altura, profundidade, idSegmento, idGrupoComponente, pesoBruto, pesoLiquido);
        console.log("salvarComponente: " + JSON.stringify(componente));
        props.salvarComponente(componente);
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
                        <Button autoFocus color="inherit" onClick={retornarComponente}>
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
                                    label="Nome"
                                    name="nome"
                                    type=""
                                    onChange={atualizarNome}
                                />
                            </Grid>
                            <Grid item xs={12} lg={9}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="altura"
                                    label="Altura"
                                    name="altura"
                                    type=""
                                    onChange={atualizarAltura}
                                />
                            </Grid>
                            <Grid item xs={12} lg={9}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="largura"
                                    label="Largura"
                                    name="largura"
                                    type=""
                                    onChange={atualizarLargura}
                                />
                            </Grid>

                            <Grid item xs={12} lg={9}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="profundidade"
                                    label="Profundidade"
                                    name="profundidade"
                                    type=""
                                    onChange={atualizarProfundidade}
                                />
                            </Grid>

                            <Grid item xs={12} lg={9}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="segmento"
                                    label="Segmento"
                                    name="segmento"
                                    type=""
                                    onChange={atualizarSegmento}
                                />
                            </Grid>

                            <Grid item xs={12} lg={9}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="grupoComponente"
                                    label="Grupo Componente"
                                    name="grupoComponente"
                                    type=""
                                    onChange={atualizarGrupo}
                                />
                            </Grid>

                            <Grid item xs={12} lg={9}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="pesoBruto"
                                    label="Peso Bruto"
                                    name="pesoBruto"
                                    type=""
                                    onChange={atualizarPesoBruto}
                                />
                            </Grid>

                            <Grid item xs={12} lg={9}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="pedoLiquido"
                                    label="Peso Liquido"
                                    name="pedoLiquido"
                                    type=""
                                    onChange={atualizarPesoLiquido}
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