
export interface UserInterFace {
    name: string
    email: string
    role: string
    status: string
    id: string
}
export interface TBuilding {
    id: string
    propertyType: string
    name: string
    address: string
    information: string
    qrCode: number
    createdAt: string
    updatedAt: string
  }
  
export interface TAdminBuilding {
    id: string
    name: string
    qrCode: number
    totalUsers: number
    totalGroups: number
    totalPaidUsers: number
    totalUnpaidUsers: number
  }