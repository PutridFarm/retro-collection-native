import Constants from 'expo-constants';

export function getDatabaseURL ()
{
    return(Constants.manifest.extra.databaseURL);
}

export function getApplicationVersion ()
{
    return(Constants.manifest.version);
}

