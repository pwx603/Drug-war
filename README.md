This is a Hyperledger Fabric project we made during 2018-Blockchain-Summer-Institude.

Curtis Miles, IBM Blockchain Solution Architect, introduced us the data structure and syntex of H. Fabric. And we created this smart contract for fight against drug abuse.

The main purpose of this smart contract is to integrate doctors, patients and suppliers on the blockchain, such that every perscripted medication can be traced back to a specific doctor, patient, and suppliers. -- (a supply chain management practice)

The main fuctions are
                      "createPrescription" -- Assign a perscription to a patient with purchase limit. The perscription will also specifiy 
                      the supplier.
                      
                      "createMedication" -- After the prescription is created, the supplier will be notified and start to prepare the 
                      medication.
                      
                      "distributeMedication" -- Supplier(e.g. local pharmacy) will alter the perscription state of the patient after the 
                      medication is distributed.
                     

