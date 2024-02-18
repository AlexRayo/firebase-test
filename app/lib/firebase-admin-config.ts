import { initializeApp, getApps, cert } from 'firebase-admin/app';

const firebaseAdminConfig = {
  credential: cert({
    projectId: "probandoweas-89ff2",
    clientEmail: "firebase-adminsdk-tltq9@probandoweas-89ff2.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCVGzn/Jyo9frn7\nVc6n9OXkAbiHiEmj7yoLv1qmXO4f6CVoJmDM4Hmb7nUSXsFiwgW5OXWYkDGw69Ct\nREcZmg6Wz56KgTPe7wcU2Ym+VKufeRISMjTsIcm+6w0KzoDjkadkoYl7Y6yaRPWv\n88mYm0N64mLhi8TPa0+mRuMqBQmLIGrQ7Pl14soBO8fTUVsTgkQzby8pyUzuVgbH\nzrQ8BZUzk1tNuoHJ960o/b+r4SvD+3H7OFlGCDQ6exbkIiiZ3K8A/LP5piIVZSiK\nHvsZLiTr4yNkghnNVS68K8GGNfGiXCswFH9zsboiGi/ERpKXS8wJaV0NGRTFGH1u\n1CgDznolAgMBAAECggEACscnS9GHrN7IcEm9UKgz5uWV8lwQYKR00FkSYySkBNPp\nwkvF4wFV4QbdWQjW5z3ZnpAv9ylzIhQFp0SgdBIN/GpBDkd1GagDBceMvKCPsE0W\n2JBfAXOWyvFgJbgUGn8Ij85aavwjOZqC/Oc9GwYcHFmZZq7M+OZLoVwN5xdqn28J\n6rq3YYyrvCj+7PpaLMVPE4QEWewCOMHFTWuXm3WIoL9Ek9YXYPXGX58/IVP7SNmP\nOQxFdb7JYXCHmfXE5LbXjxz4NCArtDfkwEcQ6j9iAJAxgHd0PRfIIa60XVHB2dgd\nZAdWJkvKENyR6YxRER+NrINVH8+tVN6kx9LTQNwf6QKBgQDM1ZIDVl3xWX/fi3lW\n51YzSXFPUQ8pckOrBaMI6C71kiPRGgPh3BgcqraGLkVfn8PyhRfggw3cX5yMu5vi\nTJunJZxKsYt/33XJ4vqv2HSGgDWnFC1Ch8fvOqfxw7BNbhRTVSZ3Fdosjy86JKab\niYuQwWgQh0spJEjnOaFl9gxkrQKBgQC6Wg2HqjkG0Hew5Cp5BuYpDWH6DycaIoqs\nwPlQ8XOJchNRIV8Kp65KBHdObVKz2J+g7utq8Ke8jzR18q5Mi1VA+rtNdaOsmxee\nFhvd6dOVwAlnXV7y4ivlkncYniIXRscRMnm6uzL0jVSzVlyOxg+E1t9XS7xgdazK\nXxm02DKiWQKBgAOc8MpmR5nuPjcvOqCxy+9zqDAB+gZ9IXxuyQVrMwjZ3w/dKZxe\nSX6X9EhBoK+jHc21U0p+hUwR060X0hQXzdcQ7sTShOdohadd/ZYEd2m38TpVPMcj\npf8uRbAaB44WFv2xTtBi7kpC7E5WPyoXLwMKpk9EU6sSHMcXWSV3RZixAoGAaAFU\npdACbeQxuR9O+Sc5k9XtRePpHfQDU7GMNHnd0utBDrnCUq8NXjAp6jKnwsp3JRnT\neGcCJwIB9IZSc1Qca9zEZtHuXKpevxN10B/twBli5ja9hG9osoNRRwMS4czV06pJ\nOEe8g7LRgBoGJIU0Kh7GnfEeHPPwUS5MqZs0f1kCgYEAlECCeLB78O34ZvudQzVF\n4XwyozgfvcVvHRQNQUjkajUbmztEDfQXH3Gl4BGxGmdjUCMP9ediagMd7NeGewVn\nO+8Hp9eCLJ7YazwBbnv9rzO0dWNhqVmmO6f11H/hta1cOVy63zjhvKTXScQxlmPv\nkw9oyRElJbCsKDSa4pHsC54=\n-----END PRIVATE KEY-----\n"
  })
}


export function customInitApp() {
  if (getApps().length <= 0) {
    initializeApp(firebaseAdminConfig);
  }
}

