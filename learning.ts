type User = {
    username: string
    roel: "guest" | "member" | "admin"
}

type UserRole = "guest" | "member" | "admin"

let userRole: UserRole = "guest"


// Learning type narrowing 