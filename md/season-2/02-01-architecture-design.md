# Architecture and Design

## Software development life cycle

- Waterfall model
  1. **Requirement** Project/Product Manager
  2. **Design(System)** Project/Product Manager
  3. **Development** SDE I, SDE II
  4. **Testing** SDET
  5. **Deployment** Devops
  6. **Maintenance** Follow above 1-5 steps again in modification need to done

## Monolith vs Microservices Architecture

| **_Factor_**          | **Monolith**                 | **Microservice**                    |
| :-------------------- | :--------------------------- | :---------------------------------- |
| **Development speed** | Slower because of same repo. | Faster                              |
| **Code Repository**   | Single                       | Multiple                            |
| **Scalability**       | Very tough                   | Good                                |
| **Deployment**        | Need to deploy all code      | Version mismatch problem but good   |
| **Tech. Stack**       | Restricted                   | Different options available         |
| **Infra. Cost**       | Low                          | Higher because of no. of services   |
| **Complexity**        | Tough of larger              | Low, easier                         |
| **Fault Isolation**   | Tough                        | Easier                              |
| **Testing**           | Easier end to end test case  | Tough end to end case               |
| **Ownership**         | Central                      | Different or same team for services |
| **Maintenance**       | Tough due to single          | Easier                              |
| **Revamp**            | Tough due to single          | Easier                              |
| **Debugging**         | Easier                       | Tough                               |
