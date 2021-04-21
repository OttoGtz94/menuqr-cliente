import QRCode from 'qrcode.react';

const Qr = () => {
	return (
		<QRCode
			value={process.env.REACT_APP_MENU}
			size='300'
			className='qr'
		/>
	);
};

export default Qr;
