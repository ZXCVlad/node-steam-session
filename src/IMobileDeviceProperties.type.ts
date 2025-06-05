export interface MobileDeviceProperties {
    mobileUserAgent?: string,     // default 'okhttp/3.12.12'
    mobileClientVersion?: string, // default '777777 3.0.0'
    deviceFriendlyName?: string,  // default 'Galaxy S22'
    osType?: number,              // default EOSType.AndroidUnknown
    gamingDeviceType?: number,    // default 528 (unknown significance)
}