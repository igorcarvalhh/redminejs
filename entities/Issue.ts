interface Issue {
  id: number;
  tracker_id: number;
  project_id: number;
  subject: string;
  description: string;
  due_date: Date;
  category_id: number;
  status_id: number;
  assigned_to_id: number;
  priority_id: number;
  fixed_version_id: number;
  author_id: number;
  lock_version: number;
  created_on: Date;
  updated_on: Date;
  start_date: Date;
  done_ratio: number;
  estimated_hours: number;
  parent_id: number;
  root_id: number;
  lft: number;
  rgt: number;
}


