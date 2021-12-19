
type Profiles = unknown

const ALL_PERMISSIONS = [
    'readBalance',
    'readTransactions',
    'writeTransactions',
    'deleteTransactions',
    'groupMember',
    'groupAdmin',
    'groupOwner',
    'groupModerator',
    'superuser',
    'canCreateKaraokeSession',
    'canMuteUserMic',
    'canAdjustUserMicVolume',
    'canRecordSession',
]

const mockProfiles: Profiles[] = [
    {
        id: 123,
        permissions: [
            'readBalance',
            'readTransactions',
            'writeTransactions',
            'deleteTransactions',
        ]
    }
]

export const getUserProfiles = (callback: (profiles: Profiles[]) => any ) => {
    setTimeout(() => {
        callback(mockProfiles)
    }, 1000)
}