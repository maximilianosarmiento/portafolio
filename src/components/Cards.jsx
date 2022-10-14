import React from 'react'
import htmlLogo from '../img/htmlLogo.png'
import cssLogo from '../img/cssLogo.png'
import jsLogo from '../img/jsLogo.png'
import sassLogo from '../img/sassLogo.png'
import psLogo from '../img/PSLogo.png'
import aiLogo from '../img/AILogo.png'
import reactLogo from '../img/reactLogo.png'
import figmaLogo from '../img/figmaLogo.png'
import gitLogo from '../img/gitLogo.png'
import Tilt from 'react-parallax-tilt';

 



const Cards = () => {

    let imagenes = [
        {
            index: 1, 
            logo:htmlLogo,
            nombre: 'html'
        },
        {
            index: 2, 
            logo:cssLogo,
            nombre: 'css'
        },
        {
            index: 3, 
            logo:jsLogo,
            nombre:'js'
        },
        {
            index: 4, 
            logo:reactLogo,
            nombre:'react'
        },
        {
            index: 5, 
            logo:gitLogo,
            nombre:'git'
        },
        {
            index: 6, 
            logo:sassLogo,
            nombre:'sass'
        }
        ,
        {
            index: 7, 
            logo:figmaLogo,
            nombre:'figma'
        }
        ,
        {
            index: 8, 
            logo:aiLogo,
            nombre:'ai'
        }
        ,
        {
            index: 9, 
            logo:psLogo,
            nombre:'ps'
        }
   
    ]

    return (
        imagenes.map(imagen => {
            return (
                <>
                    <Tilt key={imagen.index} tiltMaxAngleX='30' tiltMaxAngleY='30'  perspective='900' transitionSpeed='700' >
                            <img src={imagen.logo} className='m-2 w-20 hover:drop-shadow-xl'  id={imagen.nombre} alt={imagen.nombre} ></img>
                    </Tilt>
                </>
            )}
    ))
    

/*     <div className='flex flex-col col-span-2 mt-9'>
        <h1>Tecnologias</h1>
        <div className='flex justify-center self-center flex-wrap containerTec'>

            <Tilt tiltMaxAngleX='30' tiltMaxAngleY='30'  perspective='750' transitionSpeed='400' scale='1.1'>
                <div className='card'>
                        <img src={htmlLogo} className='cardLogo'></img>
                </div>
            </Tilt>

            <Tilt tiltMaxAngleX='30' tiltMaxAngleY='30'  perspective='750' transitionSpeed='400' scale='1.1'>
                <div className='card'>
                    <img src={cssLogo} className='cardLogo'></img>
                </div>
            </Tilt>

            <Tilt tiltMaxAngleX='30' tiltMaxAngleY='30'  perspective='750' transitionSpeed='400' scale='1.1'>
                <div className='card'>
                    <img src={jsLogo} className='cardLogo'></img>
                </div>
            </Tilt>

            <Tilt tiltMaxAngleX='30' tiltMaxAngleY='30'  perspective='750' transitionSpeed='400' scale='1.1'>
                <div className='card'>
                    <img src={reactLogo} className='cardLogo'></img>
                </div>    
            </Tilt>

            <Tilt tiltMaxAngleX='30' tiltMaxAngleY='30'  perspective='750' transitionSpeed='400' scale='1.1'>
                <div className='card'>
                    <img src={gitLogo} className='cardLogo'></img>
                </div>
            </Tilt>

            <Tilt tiltMaxAngleX='30' tiltMaxAngleY='30'  perspective='750' transitionSpeed='400' scale='1.1'>
                <div className='card'>
                    <img src={sassLogo} className='cardLogo'></img>
                </div>
            </Tilt>

            <Tilt tiltMaxAngleX='30' tiltMaxAngleY='30'  perspective='750' transitionSpeed='400' scale='1.1'>
                <div className='card'>
                    <img src={figmaLogo} className='cardLogo logoFigma'></img>
                </div>
            </Tilt>

            <Tilt tiltMaxAngleX='30' tiltMaxAngleY='30'  perspective='750' transitionSpeed='400' scale='1.1'>
                <div className='card'>
                    <img src={aiLogo} className='cardLogo'></img>
                </div>
            </Tilt>

            <Tilt tiltMaxAngleX='30' tiltMaxAngleY='30'  perspective='750' transitionSpeed='400' scale='1.1'>
                <div className='card'>
                    <img src={psLogo} className='cardLogo'></img>
                </div>
            </Tilt>
        </div>
    </div> */
    
}

export default Cards;