/**
 * @param {org.acme.drugwar.CreatePrescription} createPrescription
 * @transaction
 */

async function createPrescription (createPrescription) { 
  let factory = getFactory();
  let patient = createPrescription.patient;
  let newPrescription = factory.newResource('org.acme.drugwar','Prescription',createPrescription.prescriptionId);
  newPrescription.patient = patient;
  newPrescription.medications = createPrescription.medications;
  
  const prescriptionRegistry = await getAssetRegistry('org.acme.drugwar.Prescription');
  await prescriptionRegistry.add(newPrescription);
  
  patient.prescriptions.push(newPrescription);
  
  const patientRegistry = await getParticipantRegistry('org.acme.drugwar.Patient');
  await patientRegistry.update(patient);
}



/**
 * @param {org.acme.drugwar.CreateMedication} createMedication
 * @transaction
 */
async function CreateMedication (createMedication) { 
  let factory = getFactory();
  supplier = createMedication.supplier;
  let newMedication = factory.newResource('org.acme.drugwar','Medication', createMedication.medicationId);
  newMedication.supplier = supplier;
  newMedication.substances = createMedication.substances
  newMedication.status = "NORMAL"
  
  const medicationRegistry = await getAssetRegistry('org.acme.drugwar.Medication');
  await medicationRegistry.add(newMedication);
  
  supplier.suppliedMedications.push(newMedication);
  
  const supplierRegistry = await getParticipantRegistry('org.acme.drugwar.Supplier');
  await supplierRegistry.update(supplier);
  
}

/**
 * @param {org.acme.drugwar.AssignPatient} assignPatient
 * @transaction
 */
async function assignPatient(assignPatient) {
  assignPatient.patient.assignedDoctor = assignPatient.doctor
  assignPatient.doctor.assignedPatients.push(assignPatient.patient)
  
  const patientRegistry = await getParticipantRegistry('org.acme.drugwar.Patient');
  await patientRegistry.update(assignPatient.patient);
  
  const doctorRegistry = await getParticipantRegistry('org.acme.drugwar.Doctor');
  await doctorRegistry.update(assignPatient.doctor);
  
}


