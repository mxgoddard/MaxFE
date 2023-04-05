import React from 'react';
import Typography from '@mui/material/Typography';
import './Skills.css';

export default class Skills extends React.Component {
    render() {
        return (
            <div className='Skills-Wrapper'>
                <Typography className='Purple-Subtitle'
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>// My Skills</Typography>

                <Typography id='Experience-Title'
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', lineHeight: '1', marginTop: '2rem' } }}>Expert across languages</Typography>

                {/* TODO - Turn into carousel */}
                <div className='Skills-Image-Wrapper'>
                    <img src={require('../../../media/Icon_HTML.png')} alt='HTML' />
                    <img src={require('../../../media/Icon_CS.png')} alt='CSharp' />
                    <img src={require('../../../media/Icon_CSS.png')} alt='CSS' />
                    <img src={require('../../../media/Icon_HTML.png')} alt='HTML' />
                    <img src={require('../../../media/Icon_JS.png')} alt='JavaScript' />
                    <img src={require('../../../media/Icon_SQL.png')} alt='SQL' />
                    <img src={require('../../../media/Icon_Java.png')} alt='Java' />
                    <img src={require('../../../media/Icon_JS.png')} alt='JavaScript' />
                </div>
            </div>
        );
    };
};
