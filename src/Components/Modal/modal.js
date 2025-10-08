import ClearIcon from '@mui/icons-material/Clear';

const Modal = ({HandleClose,content}) => {
    return (
        <div className="w-full h[100vh] fixed bg-black bg-opacity-50 text-black top-0 left-0">
            <div className="w-1/2 bg-white rounded-lg h-fit mt-32 p-5">
                <div className="flex justify-between ">
                    <div className='text-4xl font-semibold '>Forgot Password</div>
                    <div onClick={()=>HandleClose()}><ClearIcon sx={{fontSize:"32px"}}/></div>
                </div>
                <div className='mt-10'>
                   {content}
                </div>
            </div>
        </div>
    )
}

export default Modal;