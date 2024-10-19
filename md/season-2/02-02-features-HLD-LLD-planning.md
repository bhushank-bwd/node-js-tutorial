# Features, HLD, LLD and planning for DevTinders

## Features

1. Create account and Login
2. Profile
3. Feed page - Explorer
4. Send Connection request
5. See our matches
6. See the request sent/received

## Tech Planning

- Micro-services
  1. Frontend React JS
  2. backend Node-JS Mongo DB

## Low level design

- Database Design

  1. user => fnm, lnm, email, password, age gender
  2. connection_requests => fromUserId, toUserIds, status[pending,ignore,accept]

- API Design
  1. post signup & login
  2. get/post/patch/delete profile
  3. post send request => ignore and interested
  4. post review request => accept and reject
  5. get request and connection
