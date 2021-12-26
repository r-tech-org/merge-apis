declare module '@r-tech-org/merge-apis-meta' {
  export const ALL_PERMISSIONS: readonly [
    'readBalance',
    'readTransaction',
    'writeTransaction',
    'deleteTransaction',
    'readCustomerProfile',
    'writeCustomerProfile',
    'deleteCustomerProfile',
    'readInventory',
    'writeInventory',
    'deleteInventory',
    'readOrder',
    'writeOrder',
    'deleteOrder',
    'runFryer',
    'runOven',
    'runPizzaMaker',
    'runHotplate',
    'runDishwasher',
    'canDispenseWater',
    'canDispenseAllDrinks',
    'canDispenseDietCoke'
  ]
  export const getAllPermissions: (
    callback: (profiles: string[]) => any
  ) => void
  export function getAllPermissionsAsync(): Promise<string[]>

  type Profiles = {
    id: number
    name: string
    grantPermissions?: typeof ALL_PERMISSIONS[number][]
    denyPermissions?: typeof ALL_PERMISSIONS[number][]
  }
  export const getUserProfiles: (
    callback: (profiles: Profiles[]) => void
  ) => void
  export function getUserProfilesAsync(): Promise<Profiles[]>
}
