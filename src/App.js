import logo from './logo.svg';
import './App.css';


import { Amplify } from 'aws-amplify';

import { NavBar, SideBar, SocialPost,SocialPostCollection} from './ui-components';
import { Flex, View, Heading, MapView, Text, Image,  withAuthenticator,AmplifyS3Image } from '@aws-amplify/ui-react';
import { useState } from 'react'
import { Marker, Popup } from 'react-map-gl'
import type { MapRef } from 'react-map-gl';

import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

Amplify.configure(awsExports);
// ======

const locationData = [
	{
		id: 1,
		title: 'Amplify Team Dinner',
		description:
			"It's not everyone, but I'm grateful I was able to see folks in real life and bond over food, drinks and laughs!",
		image:
			'https://aws-map-seattle-blog-pics.s3.amazonaws.com/public/IMG_20220330_204113.jpeg',
		longitude: -122.3098577,
		latitude: 47.6248646,
	}
]

function MarkerWithPopup({ latitude, longitude, title, description, image }) {
	const [showPopup, setShowPopup] = useState(false)

	const handleMarkerClick = ({ originalEvent }) => {
		originalEvent.stopPropagation()
		setShowPopup(true)
	}

	return (
		<>
			<Marker
				latitude={latitude}
				longitude={longitude}
				onClick={handleMarkerClick}
				scale={0.8}
				color={'blue'}
			/>
			{showPopup && (
				<Popup
					latitude={latitude}
					longitude={longitude}
					offset={{ bottom: [0, -40] }}
					onClose={() => setShowPopup(false)}
				>
					<Heading level={5}>{title}</Heading>
					<Text>{description}</Text>
					<Flex justifyContent={'center'}>
						<Image
							objectFit={'contain'}
							width="200px"
							height="200px"
							src={image}
						/>
					</Flex>
				</Popup>
			)}
		</>
	)
}

function App() {
  return (

     <div className="App">
      <NavBar />

      { <SocialPostCollection/> }
     
      
      <MapView
      initialViewState={{
        latitude: 37.8,
        longitude: -122.4,
        zoom: 14,
      }}
    />
				


     </div>
  );
}

export default withAuthenticator(App);
