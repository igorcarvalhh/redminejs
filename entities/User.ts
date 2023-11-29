export interface User {
    login: string;
    hashed_password: string;
    firstname: string;
    lastname: string;
    mail: string;
    mail_notification: boolean;
    admin: boolean;
    status: number;
    last_login_on: Date;
    language: string;
    auth_source_id: number;
    created_on: Date;
    updated_on: Date;
    type: string;
    identity_url: string;
}