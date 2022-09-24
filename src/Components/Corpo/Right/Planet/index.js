import { Planet } from 'react-planet';

export function MyPlanet() {
    return (
        <Planet 
        
        orbitStyle={defaultStyle =>({
            borderWidth: 4,
            borderStyle: 'dotted',
            
        })}
        
        centerContent={
            <div
                style={{
                    height: 100,
                    width: 100,
                    borderWidth: 4,
                    borderRadius: '50%',
                    backgroundColor: '#1da8a4',
                }} />}

            open
            orbitRadius={120}
            rotation={30}
            hideOrbit={false}            
        >
            <div
                style={{
                    height: 70,
                    width: 70,
                    borderRadius: '50%',
                    backgroundColor: '#9257ad',
                }}
            />
            <div
                style={{
                    height: 70,
                    width: 70,
                    borderRadius: '50%',
                    backgroundColor: '#9257ad',
                }}
            />
        </Planet>
    );
}