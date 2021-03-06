/*
 * @Descripttion: 
 * @Author: 刘晴
 * @Date: 2022-06-02 11:22:33
 * @LastEditors: 刘晴
 * @LastEditTime: 2022-06-05 14:56:10
 */
import Cookies from 'js-cookie'

const TokenKey = 'Ttoken'
const RoleKey = 'roles'
const nameKey = 'name'
const avatarKey = 'avatar'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token: string) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getRoles() {
  return Cookies.get(RoleKey)
}

export function setRoles(role: string) {
  return Cookies.set(RoleKey, role)
}

export function removeRoles() {
  return Cookies.remove(RoleKey)
}

export function getName() {
  return Cookies.get(nameKey)
}

export function setName(name: string) {
  return Cookies.set(nameKey, name)
}

export function removeName() {
  return Cookies.remove(nameKey)
}

export function getAvatar() {
  return Cookies.get(avatarKey)
}

export function setAvatar(avatar: string) {
  return Cookies.set(avatarKey, avatar)
}

export function removeAvatar() {
  return Cookies.remove(avatarKey)
}