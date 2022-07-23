# accounts

A very specific expense tracker

### Supabase

Import `db.sql` into a supabase account. It will create 3 tables.

Copy `lib/sample.config.ts` to `lib/config.ts`

Get url and anon_key from the web interface and use them in `lib/config.ts`.

### Run locally

```
yarn
yarn lint
yarn start
```

Start a new terminal window and run
```
yarn android
```

### Build an apk

```
cd android
./gradlew assembleRelease
```

Find the apk in `android/app/build/outputs/apk/releases/`.
