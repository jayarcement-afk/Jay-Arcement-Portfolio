create table if not exists portfolio_files (
  id text primary key,
  stage text not null,
  name text not null,
  content_type text not null,
  size_bytes integer not null,
  bytes bytea not null,
  uploaded_at timestamptz not null default now(),
  constraint portfolio_files_size_bytes_check check (size_bytes > 0 and size_bytes <= 10485760),
  constraint portfolio_files_stage_check check (stage in ('production', 'preview'))
);

create index if not exists portfolio_files_stage_uploaded_idx
  on portfolio_files (stage, uploaded_at desc);
