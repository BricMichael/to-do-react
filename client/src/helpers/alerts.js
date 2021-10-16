import Swal from 'sweetalert2';


export const alertSuccess = (msgAlert) => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        text: msgAlert,
        showConfirmButton: false,
        timer: 1300,
        width: '25%'
    })
}

export const alertDeleteItems = async (msgTitle) => {
    const { isConfirmed } = await Swal.fire({
        text: msgTitle,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#13b9b9',
        // cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
        width: '455px',
    })

    if (isConfirmed) return true;
    else return false;
}