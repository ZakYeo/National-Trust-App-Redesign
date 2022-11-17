import React, { useCallback } from 'react';
import {Button, Linking} from 'react-native';
import colours from '../config/colours';


/**
   * Custom button, once pressed will send to the specified URL
   * @param  {Object} url            The URL to use for the button.
   * @param  {Object} children       The text to display on the button.
   * @link                           https://reactnative.dev/docs/linking
   * @return                         Returns the custom button
   */ 
function OpenURLButton({ url, children }){
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      }
    }, [url]);
  
    return <Button color={colours.primaryCol} title={children} onPress={handlePress} />;
};



export default OpenURLButton;