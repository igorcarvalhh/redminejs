interface Project {
    id: number;
    name: string;
    description: string;
    homepage: string;
    is_public: boolean;
    parent_id: number;
    created_on: Date;
    updated_on: Date;
    identifier: string;
    status: number;
    lft: number;
    rgt: number;
}